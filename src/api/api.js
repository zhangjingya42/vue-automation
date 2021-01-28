import { ajaxGet, ajaxPost,reqExpost  } from './request'
import { studioUrl,exportOrderUrl } from './url';
// //获取登录页的信息
export const reqStudioConfig = params => ajaxPost({ url: `/api/studio/config`, special:true, params });
export const reqStudioConfigGet = params => ajaxGet({ url: `/api/studio/index`, special:true });

// //注册
export const postregister = params => ajaxPost({url: `/studio/register`,params})