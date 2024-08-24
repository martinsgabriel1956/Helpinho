import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

export const USERS_TABLE = process.env.USERS_TABLE;
const client = new DynamoDBClient();
export const docClient = DynamoDBDocumentClient.from(client);
