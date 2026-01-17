// factory/NotificationFactory.h
#pragma once
#include <unordered_map>
#include <memory>
#include <string>
#include <functional>

#include "../notification/Notification.h"

class NotificationFactory {
public:
    using Creator = std::function<std::unique_ptr<Notification>()>;

    static void registerType(const std::string& type, Creator creator) {
        getMap()[type] = creator;
    }

    static std::unique_ptr<Notification> create(const std::string& type) {
        auto it = getMap().find(type);
        if (it != getMap().end())
            return it->second();
        return nullptr;
    }

private:
    static std::unordered_map<std::string, Creator>& getMap() {
        static std::unordered_map<std::string, Creator> map;
        return map;
    }
};
