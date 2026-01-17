#include <iostream>
#include "factory/NotificationFactory.h"
#include "notification/EmailNotification.h"
#include "notification/SMSNotification.h"
#include "notification/PushNotification.h"

int main() {
    std::string type;
    std::cout<<"Enter notification type(sms/email/push) ";
    std::cin >> type;

    auto notifier = NotificationFactory::create(type);
    if (notifier)
        notifier->send("Hello!");
    else
        std::cout << "Invalid type\n";
}
