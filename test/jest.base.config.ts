import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: '../src',
  coverageDirectory: '../coverage',
  coveragePathIgnorePatterns: [
    '.args.ts',
    '.input.ts',
    '.enum.ts',
    '.schema.ts',
    '.entity.ts',
    '.config.ts',
    '.factory.ts',
  ],
};
export default config;
