import React from 'react';
import {connect} from 'react-redux';
import { searchPokemon} from '../actions';

class Search extends React.Component {
    
    

    getPokemon(event){
        searchPokemon(event.target.value);
    }
    render(){
        return (
            <div>
                <input onChange={e => this.getPokemon(e)} name="search" value={this.props.searchValue}/>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return { 
       searchValue: state.searchText
   };
};
export default connect(mapStateToProps, {searchPokemon})( Search);