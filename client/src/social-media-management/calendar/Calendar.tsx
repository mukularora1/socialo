import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useEffect } from "react";
import "./calendar.css";
function PostCalendar() {
  useEffect(() => {
    const calendarEl = document.getElementById("calendar") as any;
    const calendar = new Calendar(calendarEl, {
      plugins: [interactionPlugin, dayGridPlugin],
      initialView: "dayGridMonth",
      editable: true,
      events: [{ title: "Meeting", start: new Date() }],
    });

    calendar.render();
  }, []);
  return <div id="calendar"></div>;
}

export default PostCalendar;
