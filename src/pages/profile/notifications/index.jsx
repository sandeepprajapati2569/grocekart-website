import MetaData from "@/components/metadata-component/MetaData";
import NotificationsPage from "@/components/pagecomponents/NotificationsPage";
import React from "react";

const Notifications = () => {
  return (
    <div>
      <MetaData pageName="/profile/notifications" title={`Notifications - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
      <NotificationsPage />
    </div>
  );
};

export default Notifications;
