import { User, Chip, user } from "@nextui-org/react";
import React from "react";
import { AlertUser } from "./data";

interface Props {
  user: AlertUser;
  columnKey: React.Key;
}

export const RenderCell: React.FC<Props> = ({ user, columnKey }) => {
  switch (columnKey) {
    case "time_date":
      return (
        <div className="flex flex-col">
          <span className="text-sm">{user.time}</span>
          <span className="text-xs text-gray-500">{user.date}</span>
        </div>
      );

    case "alertId":
      return (
        <span className="text-sm font-medium">{user.alertId}</span>
      );

    case "amount":
      return (
        <div className="flex flex-col">
          <span className="text-sm font-medium">{user.amount}</span>
        </div>
      );

    case "transactionType":
      return (
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">{user.transactionType}</span>
        </div>
      );

    case "senderId":
      return (
        <div className="flex flex-col">
          <span className="text-sm">{user.senderId}</span>
        </div>
      );

    case "transactionId":
      return (
        <div className="flex flex-col">
          <span className="text-sm">{user.transactionId}</span>
        </div>
      );

    case "riskScore":
      return (
        <Chip
          size="sm"
          variant="flat"
          color={
            parseInt(user.riskScore) >= 60
              ? "danger"
              : parseInt(user.riskScore) <= 59
              ? "warning"
              : "success"
          }
        >
          <span className="capitalize text-xs">{user.riskScore}</span>
        </Chip>
      );

    case "alertStatus":
      return (
        <Chip
          size="sm"
          variant="flat"
          color={
            user.alertStatus === "flagged"
              ? "danger"
              : user.alertStatus === "pending"
              ? "warning"
              : "success"
          }
        >
          <span className="capitalize text-xs">{user.alertStatus}</span>
        </Chip>
      );

    default:
      return <span className="text-sm">{user[columnKey as keyof AlertUser]}</span>;
  }
};