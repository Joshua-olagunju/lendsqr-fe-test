// src/components/DashboardCards/DashboardCards.tsx
import { userDashboardCards } from "../../data/userDashboardCards";

const UserDashboardCards = () => {
  return (
    <div className="cards">
      {userDashboardCards.map((card, index) => {
        const Icon = card.icon;

        return (
          <div className="card" key={index}>
            <div
              className="card__icon"
              style={{ backgroundColor: `${card.iconColor}20` }}
            >
              <Icon style={{ color: card.iconColor }} />
            </div>

            <p className="card__title">{card.title}</p>

            <h2 className="card__value">{card.value}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default UserDashboardCards;
