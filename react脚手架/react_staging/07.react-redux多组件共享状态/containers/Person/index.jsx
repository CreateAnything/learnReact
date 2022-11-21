import { connect } from 'react-redux'
import { createPersonAction } from '../../redux/actions/person'
import PersonUI from './person_ui'
export default connect(
    ({person,count}) =>({person,count}),
    {
        addPerson:createPersonAction
    }
)(PersonUI)