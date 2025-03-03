module.exports = {
  apps: [{
    name: "travel-backend",
    script: "src/index.js",
    instances: "max",
    exec_mode: "cluster",
    env: {
      NODE_ENV: "production",
    },
    env_production: {
      NODE_ENV: "production"
    }
  }]
} 