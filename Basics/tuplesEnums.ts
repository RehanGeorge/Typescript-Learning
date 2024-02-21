const color: [number, number, number] = [255, 0, 0];

type HTTPResponse = [number, string];

const httpMessage: HTTPResponse = [404, "Not Found"];

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}
const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}

const myKey = ArrowKeys.UP;