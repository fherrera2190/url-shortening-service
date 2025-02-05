import { loadEnvFile } from "process";
import { envsSchema } from "../schemas/envs.schema";

interface EnvVars {
  PORT: number;
  DATABASE_URL: string;
}
loadEnvFile(".env");

const { error, value } = envsSchema.validate({
  ...process.env,
});

if (error) throw new Error(`Config validation error: ${error.message}`);

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  databaseUrl: envVars.DATABASE_URL,
};
