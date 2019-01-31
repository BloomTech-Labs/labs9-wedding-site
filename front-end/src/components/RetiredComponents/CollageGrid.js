// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';
// import '../src/Assets/images/IMG_0321.jpg';

// const styles = theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: 500,
//     height: 450,
//   },
// });

// const image = url(https://i.ebayimg.com/images/g/k5cAAOSwNSxVeEJv/s-l225.jpg);
// const image2 = url(https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg);
 
//   const tileData = [
//     {
//       img: image,
//       title: 'Image',
//       author: 'author',
//       cols: 2,
//     },
//     {
//         img: image2,
//         title: 'Image',
//         author: 'author',
//         cols: 2,
//     },
//   ];
 
// function ImageGridList(props) {
//   const { classes } = props;

//   return (
//     <div className={classes.root}>
//       <GridList cellHeight={160} className={classes.gridList} cols={3}>
//         {tileData.map(tile => (
//           <GridListTile key={tile.img} cols={tile.cols || 1}>
//             <img src={tile.img} alt={tile.title} />
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//   );
// }

// ImageGridList.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ImageGridList);