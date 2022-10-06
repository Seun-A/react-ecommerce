import React from "react"

import { Route, Routes } from "react-router-dom"
import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils"

import { connect } from "react-redux"
import { updateCollections } from "../../redux/shop/shop.actions"

import CollectionOverview from "../../components/collection-overview/collection-overview.component"
import CollectionPage from "../collection/collection.component"
import WithSpinner from "../../components/with-spinner/with-spinner.component"


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  state = { loading: true }
  
  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      this.setState({ loading: false })
    })
  }
  
  render() {
    const { loading } = this.state

    return (
      <div className='shop-page'>
        <Routes>
          <Route
            exact
            path='/'
            element={<CollectionOverviewWithSpinner isLoading={loading} />}
          />
          <Route
            exact
            path=':collectionId'
            element={<CollectionPageWithSpinner isLoading={loading} />}
          />
        </Routes>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
