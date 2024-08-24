import express from "express";
import crypto from "node:crypto";
import bcrypt from "bcrypt";
import { GetCommand, PutCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";

import { docClient, USERS_TABLE } from "../utils";
import { CreateUserSchema, createUserSchema, editUserSchema } from "../schemas";

const userRoutes = express.Router();

userRoutes.get("/users/:userId", async (request, response) => {
  const params = {
    TableName: USERS_TABLE,
    Key: {
      userId: request.params.userId,
    },
  };

  try {
    const command = new GetCommand(params);
    const { Item } = await docClient.send(command);
    if (Item) {
      const { userId, name } = Item;
      response.json({ userId, name });
    } else {
      response
        .status(404)
        .json({ error: 'Could not find user with provided "userId"' });
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Could not retrieve user" });
  }
});

userRoutes.post("/users", async (request, response) => {
  const data: createUserSchema = request.body;
  const { error } = CreateUserSchema.safeParse(data);

  if (error) {
    return response.status(400).json({ error: error.message });
  }

  const cryptedPassword = await bcrypt.hash(data.password, 8);
  const formattedBirthDate = new Date(data.birthDate).toISOString();
  const userId = crypto.randomUUID();

  const params = {
    TableName: USERS_TABLE,
    Item: {
      userId,
      ...data,
      password: cryptedPassword,
      birthDate: formattedBirthDate,
    },
  };

  try {
    const command = new PutCommand(params);
    await docClient.send(command);

    const responseBody = {
      userId,
      name: data.name,
      email: data.email,
      document: data.document,
      birthDate: data.birthDate,
      phone: data.phone,
    };

    response.json(responseBody);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Could not create user" });
  }
});

userRoutes.put("/users/:userId", async (request, response) => {
  const { userId } = request.params;
  const { birthDate, document, email, name, password, phone }: editUserSchema =
    request.body;

  const params = {
    TableName: USERS_TABLE,
    Item: { userId, birthDate, document, email, name, password, phone },
    Key: {
      userId: request.params.userId,
    },
  };

  if (password) {
    const cryptedPassword = await bcrypt.hash(password, 8);
    params.Item.password = cryptedPassword;
  }

  try {
    const command = new PutCommand(params);
    await docClient.send(command);

    const responseBody = {
      userId,
      name: name,
      email: email,
      document: document,
      birthDate: birthDate,
      phone: phone,
      password,
    };

    response.json({ responseBody });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Could not create user" });
  }
});

userRoutes.delete("/users/:userId", async (request, response) => {
  const params = {
    TableName: USERS_TABLE,
    Key: {
      userId: request.params.userId,
    },
  };

  try {
    const command = new DeleteCommand(params);
    await docClient.send(command);
    response.json({ userId: request.params.userId });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Could not retrieve user" });
  }
});

export default userRoutes;
