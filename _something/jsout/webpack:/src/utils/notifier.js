import { EventBus } from "@/utils/event-bus";

export const notifier = (title, message) => {
  EventBus.$emit("notification", { title, message });
};
