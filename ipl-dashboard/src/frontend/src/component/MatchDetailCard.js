import {React}  from "react";
import {Link} from "react-router-dom";

import './MatchDetailCard.css';

export const MatchDetailCard = ({teamName, match, teamColor}) => {
    if(!match) return null;

    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const otherTeamRoute = `/teams/${otherTeam}`;
    const isMatchWon = teamName === match.matchWinner;

    const teamColorStyle = {
        backgroundColor: teamColor,
    };

    return (
        <div className="MatchDetailCard" style={teamColorStyle}>

            <div className="detail">
                <h3>Latest Matches </h3>
                <span className="vs">vs</span>
                <h1><Link to={otherTeamRoute}>{otherTeam}</Link></h1>
                <h2 className="match-date">{match.date}</h2>
                <h3 className="match-venue">at {match.venue}</h3>
                <h3 className="match-result">{match.matchWinner} won by {match.result_margin} {match.result}</h3>
            </div>
            <div className="declare-won-or-loss">

                <span>
                    {isMatchWon ? <p className="text-wl" >Won</p> : <p className="text-wl">Loss</p>}
                </span>
            </div>

            <div className="additional-detail">
                <h3>First Innings</h3>
                <p>{match.team1}</p>

                <h3>Second Innings</h3>
                <p>{match.team2}</p>

                <h3>Man of the Match</h3>
                <p>{match.playerOfMatch}</p>

                <h3>Umpires</h3>
                <p>{match.umpire1}, {match.umpire2}</p>
            </div>
        </div>
    );
}
