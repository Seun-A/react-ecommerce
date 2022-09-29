import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from "../../redux/directory/directory.selectors"

import MenuItem from "../menu-item/menu-item.component"


const Directory = ({ sections }) => (
  <div className="container-fluid p-0 directory-menu">
    <div className="row m-0">
      {
        sections.map( ({ id, ...otherProps }) => {
          const ids = [1, 2, 3]
          const menItems = ids.includes(id)
            ? <MenuItem key={id} {...otherProps} />
            : null
          return menItems
        })
      }
    </div>

    <div className="row m-0">
      {
        sections.map( ({ id, ...otherProps }) => {
          const ids = [4, 5]
          const menItems = ids.includes(id)
            ? <MenuItem key={id} {...otherProps} />
            : null
          return menItems
        })
      }
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
