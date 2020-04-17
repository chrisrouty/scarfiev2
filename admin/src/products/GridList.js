import React from 'react';
import MuiGridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { makeStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import { Link } from 'react-router-dom';
import { NumberField, ReferenceField, ImageField, TextField } from 'react-admin';
import { linkToRecord } from 'ra-core';


const useStyles = makeStyles(theme => ({
    root: {
        margin: '-2px',
    },
    gridList: {
        width: '100%',
        margin: 0,
    },
    tileBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)',
    },
    placeholder: {
        backgroundColor: theme.palette.grey[300], 
        height: '100%',
    },
    price: {
        display: 'inline',
        fontSize: '1em',
    },
    link: {
        color: '#fff',
    },
}));

const getColsForWidth = width => {
    if (width === 'xs') return 2;
    if (width === 'sm') return 3;
    if (width === 'md') return 4;
    if (width === 'lg') return 5;
    return 6;
};

const times = (nbChildren, fn) =>
    Array.from({ length: nbChildren }, (_, key) => fn(key));

const LoadingGridList = ({ width, nbItems = 20 }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <MuiGridList
                cellHeight={240}
                cols={getColsForWidth(width)}
                className={classes.gridList}
            >
                {' '}
                {times(nbItems, key => (
                    <GridListTile key={key}>
                        <div className={classes.placeholder} />
                    </GridListTile>
                ))}
            </MuiGridList>
        </div>
    );
};

const LoadedGridList = ({ data, basePath, width }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <MuiGridList
                cellHeight={240}
                cols={getColsForWidth(width)}
                className={classes.gridList}
            >
                {Object.values(data).map((item, index) => (
                    <GridListTile
                        component={Link}
                        key={index}
                        to={linkToRecord(basePath, item.id)}
                    >
                        <ReferenceField resource="images" record={item} source="imageIdDefault" reference="images" basePath={basePath} link={false}>
                            <ImageField source="url" />
                        </ReferenceField>
                        <GridListTileBar
                            className={classes.tileBar}
                            title={item.name}
                            subtitle={
                                <span>
                                    <NumberField
                                        className={classes.price}
                                        source="price"
                                        record={item}
                                        color="inherit"
                                        options={{
                                            style: 'currency',
                                            currency: 'EUR',
                                        }}
                                    />
                                    <TextField
                                        source="likes_count"
                                        record={item}
                                        color="inherit"
                                    />
                                </span>
                            }
                        />
                    </GridListTile>
                ))}
            </MuiGridList>
        </div>
    );
};



const GridList = ({ loaded, ...props }) =>
    loaded ? <LoadedGridList {...props} /> : <LoadingGridList {...props} />;

export default withWidth()(GridList);
