import DashboardController from './DashboardController'
import ProductController from './ProductController'
import ServiceController from './ServiceController'
import ProductCategoryController from './ProductCategoryController'
import BannerController from './BannerController'
import PostController from './PostController'
import ClientController from './ClientController'
import UserController from './UserController'
import SiteSettingController from './SiteSettingController'
import DepartmentController from './DepartmentController'
const Admin = {
    DashboardController: Object.assign(DashboardController, DashboardController),
ProductController: Object.assign(ProductController, ProductController),
ServiceController: Object.assign(ServiceController, ServiceController),
ProductCategoryController: Object.assign(ProductCategoryController, ProductCategoryController),
BannerController: Object.assign(BannerController, BannerController),
PostController: Object.assign(PostController, PostController),
ClientController: Object.assign(ClientController, ClientController),
UserController: Object.assign(UserController, UserController),
SiteSettingController: Object.assign(SiteSettingController, SiteSettingController),
DepartmentController: Object.assign(DepartmentController, DepartmentController),
}

export default Admin