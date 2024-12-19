# Use an official PHP image as the base image
FROM php:8.0-cli

# Install dependencies needed for Composer
RUN apt-get update && apt-get install -y \
    curl \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# # Set the working directory inside the container
# WORKDIR /app


# Set the working directory to where your composer.json file is
WORKDIR backend

# Copy the project files into the container
# COPY . /var/www/html

# Install PHP dependencies
RUN composer install

# Expose port 80 (standard for HTTP traffic)
EXPOSE 80

# Start PHP built-in server on port 80
CMD ["php", "-S", "0.0.0.0:80", "-t", "backend"]



# # FROM php:8.0-cli

# # Install dependencies
# RUN apt-get update && apt-get install -y \
#     curl \
#     unzip

# # Set working directory
# WORKDIR /var/www/html

# # Copy project files
# COPY . .

# # Expose port
# EXPOSE 10000

# # Start PHP server
# CMD ["php", "-S", "0.0.0.0:10000", "-t", "./"]