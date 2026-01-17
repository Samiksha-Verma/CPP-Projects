// notification/Notification.h
#pragma once
#include <string>

class Notification {
public:
    virtual void send(const std::string& msg) = 0;
    virtual ~Notification() {}
};
