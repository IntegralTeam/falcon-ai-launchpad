# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Copy .env file (if exists)
COPY .env .env

# Build the application
RUN npm run build

# Stage 2: Production
FROM node:20-alpine AS production

WORKDIR /app

# Copy package files for production dependencies
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Copy .env file from builder stage
COPY --from=builder /app/.env ./.env

# Expose port (default for Vite preview is 4173)
EXPOSE 4173

# Set environment to production
ENV NODE_ENV=production

# Start the application
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
