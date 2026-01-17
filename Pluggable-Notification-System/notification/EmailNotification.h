// notification/EmailNotification.h
#pragma once
#include "Notification.h"
#include <iostream>
#include "../factory/NotificationFactory.h"

class EmailNotification : public Notification {
public:
    void send(const std::string& msg) override {
        std::cout << "Email sent: " << msg << std::endl;
    }

private:
    static bool registered;
};

// Self-registration
bool EmailNotification::registered =
    [](){
        NotificationFactory::registerType(
            "email",
            [](){ return std::make_unique<EmailNotification>(); }
        );
        return true;
    }();
