#pragma once
#include "Notification.h"
#include <iostream>
#include "../factory/NotificationFactory.h"

class SMSNotification : public Notification {
public:
    void send(const std::string& msg) override {
        std::cout << " SMS sent: " << msg << std::endl;
    }

private:
    static bool registered;
};

bool SMSNotification::registered =
    [](){
        NotificationFactory::registerType(
            "sms",
            [](){ return std::make_unique<SMSNotification>(); }
        );
        return true;
    }();

