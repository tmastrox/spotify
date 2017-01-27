import * as React from "react";
import {Observable} from "rx-dom";
import {Grid, Cell} from "radium-grid";
import {StyleRoot} from "radium";
import {connect} from "react-redux";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from "material-ui/Card";


export const FollowingComponent = ({following}) => {
    return (<div>
        <h3>Following:</h3>
        {following.items.map((artist) => {
            return (<CardHeader
                key={Math.random()}
                title={artist.id}
                subtitle={artist.name}
                avatar={artist.images[0].url}
                width="1"/>)
        })}
    </div>)
};