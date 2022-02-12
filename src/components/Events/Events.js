import "./Events.css";
import { events } from "../../data";

const Events = () => {
  return (
    <section className="events">
      <header className="news__header">
        <h3>Upcoming Events</h3>
      </header>
      <div className="events--box-1">
        <div className="ci">
          <ul className="upcoming-events">
            {events.map((event) => (
              <li key={event.event}>
                <article className="event">
                  <div className="events--box-2">
                    <div className="event__month">
                      <p className="text-styles-1">{event.month}</p>
                    </div>
                    <div className="event__day">
                      <p className="event__event--text-styling">{event.day}</p>
                    </div>
                  </div>
                  <div className="events--box-3">
                    <div className="event__time">
                      <p className="text-styles-3">{event.time}</p>
                    </div>
                    <div className="event__event">
                      <a href="#" className="event__event--text-styling">
                        {event.event}
                      </a>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
          <div>
            <a href="#">View Calendar</a>
          </div>
        </div>
        <div className="ads">
          <div className="ads--box">
            <a href="#">
              <img
                src={`https://pet-rescue.cmsmasters.net/wp-content/uploads/2015/01/donate.png`}
              />
            </a>
          </div>
          <div className="ads--box">
            <a href="#">
              <img
                src={`https://pet-rescue.cmsmasters.net/wp-content/uploads/2015/01/onlineshop.jpg`}
              />
            </a>
          </div>
          <div className="ads--box">
            <a href="#">
              <img
                src={`https://pet-rescue.cmsmasters.net/wp-content/uploads/2015/01/facebook.png`}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
