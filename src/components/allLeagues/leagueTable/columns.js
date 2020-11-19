import React from "react";
import { Link } from "react-router-dom";

export const COLUMNS = [
    {
        Header: "Team ID",
        accessor: "teamid",
        // cell: ({ row }) => (<Link to={{ pathname: `/foo/${row.id}` }}>{row.name}</Link>),
        // Cell: e =><a href={e.value}> {e.value} </a>

        Cell: el => <Link to={`/allTeams/${el.value}`}>View Team</Link>

    },
    {
        Header: "Team Name",
        accessor: "name",
        
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