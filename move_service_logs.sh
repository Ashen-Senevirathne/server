#!/bin/bash

# Service name
SERVICE_NAME="server.service"

# Destination directoy
ARCHIVE_DIR="/var/www/server/archive/$(date +%F)"

# Create the archive directory 
mkdir -p "$ARCHIVE_DIR"

# Extract and move the logs 
journalctl -u "$SERVICE_NAME" --since "yesterday" --until "now" > "$ARCHIVE_DIR/${SERVICE_NAME}_$(date +%F).log"

sudo journalctl --rotate
sudo journalctl --vacuum-time=1s 
