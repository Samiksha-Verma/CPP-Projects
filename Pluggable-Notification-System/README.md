# Pluggable Notification System (C++)

This project is a simple backend-style notification system built to understand
how pluggable design works using C++.

The goal of this project is to demonstrate how different notification types
can be added without changing the main application logic.

## What this project does
- Sends notifications using different channels (Email, SMS, Push)
- Uses a factory to create notification objects at runtime
- Allows new notification types to be added with minimal code changes
- Uses a CLI-based input only for demonstration purposes

## Why this project
In real applications, notification logic is usually handled by backend services
and triggered by system events.  
This project focuses on the **core notification engine**, not on UI or frontend.

## Project Structure
- `Notification` – Base interface
- `NotificationFactory` – Creates notification objects based on type
- `EmailNotification`, `SMSNotification`, `PushNotification` – Implementations
- `main.cpp` – Simple CLI demo to test the system

## How it works
1. Each notification type registers itself with the factory
2. The factory creates the correct notification object based on input
3. The notification is sent using the selected channel


## Notes
- CLI input is used only to demonstrate functionality

- In a real system, notifications would be triggered automatically

- This project is intended for learning and backend design practice
