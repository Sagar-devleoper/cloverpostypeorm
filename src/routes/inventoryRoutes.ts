import { Router} from 'express'
import { inventoryController } from '../controller';
// import  {getData}  from '../controller/InventoryController';
// import  {} from '../controller/InventoryController'
const _router: Router = Router({
    mergeParams: true,
});

_router.route('/datavalue',).get(inventoryController.create)


export const router = _router;
