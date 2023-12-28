# Playwright Environment Setup and Configuration

Welcome to the Playwright Environment Setup and Configuration repository! This repository provides comprehensive instructions for configuring Playwright for various environments, allowing seamless automation testing across multiple environment and data.

## Install Dependencies

  ```bash
  npm install dotenv --save
  ```
  ```bash
  npm install --save-dev cross-env
  ```

## Execution
  
  Execute tests for a specific environment using:

  ```bash
  npm run env:dev
  ```
  Replace `dev` with `stg` or `prod` to run tests against different environments.