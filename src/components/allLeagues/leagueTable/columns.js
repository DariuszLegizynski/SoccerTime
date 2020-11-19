import React from "react";
import { Link } from "react-router-dom";

export const COLUMNS = [
    {
        Header: "Team Name",
        accessor: "name",
        Cell: el => {
            console.log(el);
            return (
                <Link className="league__league-table__table__tbody__tr__td__link link" to={`/allTeams/${el.row.values.teamid}`}>{el.value}</Link>
            )
          }
    },
    {
        Header: "View Team",
        accessor: "teamid",
    },
    {
        Header: "Games Played",
        accessor: "played"
    },
    {
        Header: "Wins",
        accessor: "win"
    },
    {
        Header: "Draws",
        accessor: "draw"
    },
    {
        Header: "Losses",
        accessor: "loss"
    },
    {
        Header: "Goals +",
        accessor: "goalsfor"
    },
    {
        Header: "Goals -",
        accessor: "goalsagainst"
    },
    {
        Header: "Goals Diff",
        accessor: "goalsdifference"
    },
    {
        Header: "Points",
        accessor: "total"
    },
]