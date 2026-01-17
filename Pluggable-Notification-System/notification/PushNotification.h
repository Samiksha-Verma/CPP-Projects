#pragma once
#include "Notification.h"
#include <iostream>
#include "../factory/NotificationFactory.h"

class PushNotification : public Notification {
public:
    void send(const std::string& message) override {
        std::cout << " Push notification sent: " << message << std::endl;
    }

private:
    static bool registered;
};

// Factory registration
bool PushNotification::registered =
[]() {
    NotificationFactory::registerType(
        "push",
        []() {
            return std::make_unique<PushNotification>();
        }
    );
    return true;
}();
