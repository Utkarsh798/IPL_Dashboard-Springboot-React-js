import {React}  from "react";
import {Link} from  "react-router-dom";

import './MatchSmallCard.css';

export const MatchSmallCard = ({teamName, match}) => {
    if(!match) return null;

    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const otherTeamRoute = `/teams/${otherTeam}`;
    return (
        <div className="MatchSmallCard">
            <h3><Link to={otherTeamRoute}>{otherTeam}</Link></h3>
            <p>{match.matchWinner} won by {match.result_margin} {match.result}</p>
        </div>
    );
}
