"use client";

import { useState } from "react";
import { ATTENDANCE_STATUSES } from "@/lib/constants";

// Attendance for one activity. State lives on screen only; saving comes with the backend.
export default function AttendanceTable({ participants, initialRecords }) {
  const [statuses, setStatuses] = useState(() =>
    Object.fromEntries(initialRecords.map((r) => [r.profileId, r.status]))
  );

  const presentCount = participants.filter((p) => statuses[p.id] === "present").length;

  return (
    <div>
      <p aria-live="polite">
        {presentCount} of {participants.length} present
      </p>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th scope="col">Participant</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((p) => (
              <tr key={p.id}>
                <th scope="row">{p.name}</th>
                <td>
                  <select
                    className="field-input"
                    aria-label={`Attendance for ${p.name}`}
                    value={statuses[p.id] ?? ""}
                    onChange={(e) => setStatuses({ ...statuses, [p.id]: e.target.value })}
                  >
                    <option value="">Not marked</option>
                    {ATTENDANCE_STATUSES.map((s) => (
                      <option key={s} value={s}>
                        {s[0].toUpperCase() + s.slice(1)}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
