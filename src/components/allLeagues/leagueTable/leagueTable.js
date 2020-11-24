import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useTable } from "react-table";
import { COLUMNS } from "./columns";

import _ from "lodash";

import { getTableLookup } from "../../../actions/leagues/tableLookup/getTableLookup";
import shortid from "shortid";

const LeagueTable = ({leagueId}) => {
    const dispatch = useDispatch();
    const selectLeagueId = useSelector (state => state.tableLeague);

    useEffect (() => {
        dispatch(getTableLookup(leagueId))
    }, [dispatch, leagueId]);
    
    let request = [];
    if(!_.isEmpty(selectLeagueId.data)) {
        request = selectLeagueId.data.map(el => el);
    }

    let currentYear = 0;
    let nextYear = 0;

    const currentDate = new Date(new Date().getFullYear() + '-' + (new Date().getMonth()));
    const seasonChangeDate = new Date("01/08/" + currentYear);

    //to get the current season
    if (seasonChangeDate >= currentDate) {
        nextYear = currentYear;
        currentYear = currentYear - 1;
    } else {
        currentYear = new Date().getFullYear();
        nextYear = currentYear + 1;
    }

    const memoColumns = useMemo(() => COLUMNS, []);
    const memoData = useMemo(() => request, [request]);
    
    const tableInstance = useTable({
        columns: memoColumns,
        data: memoData
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

    const showTable = () => {
        if(!_.isEmpty(selectLeagueId.data)) {
            return (
                <table className="league__league-table__table" {...getTableProps()}>
                    <thead className="league__league-table__table__thead">
                        {
                        headerGroups.map((headerGroup) => (
                            <tr className="league__league-table__table__thead__tr" {...headerGroup.getHeaderGroupProps()} key={shortid.generate()}>
                                {headerGroup.headers.map(column => (
                                    <th className="league__league-table__table__thead__tr__th" {...column.getHeaderProps()}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                            ))
                        }
                    </thead>
                    <tbody className="league__league-table__table__tbody" {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr className="league__league-table__table__tbody__tr" {...row.getRowProps()} key={shortid.generate()} tabIndex="0">
                                    {row.cells.map(cell => {
                                        return (
                                        <td className="league__league-table__table__tbody__tr__td" key={shortid.generate()}>
                                            {cell.render("Cell")}
                                        </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )
        }

        if(selectLeagueId.loading) {
            return (
                <div>
                    <p className="league__league-table__loading p">loading...</p>
                </div>
            )
        }

        if(selectLeagueId.errorMsg !== "") {
            return (
                <div>
                    <p className="league__league-table__no-table p">{selectLeagueId.errorMsg}</p>
                </div>
            ) 
        }

        return (
                <span className="league__league-table__no-table p">No League Table data found</span>
        )
    }

    return (
        <section className="league__league-table">
            <h2 className="league__league-table__h2 h2">League's Table & results</h2>
            <h3 className="league__league-table__h3 h3">Season {currentYear} - {nextYear}</h3>
            {showTable()}
        </section>
    )
}

export default LeagueTable;