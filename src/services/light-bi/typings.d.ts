declare namespace API {
  type ChartCreateParam = {
    chartData?: string;
    chartType?: string;
    goal?: string;
  };

  type ChartQueryParam = {
    chartId?: string;
    chartType?: string;
    currentPage?: number;
    goal?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userId?: string;
  };

  type ChartUpdateParam = {
    chartData?: string;
    chartId?: string;
    chartType?: string;
    goal?: string;
  };

  type ChartVO = {
    chartData?: string;
    chartId?: number;
    chartType?: string;
    createTime?: string;
    genChartData?: string;
    genChartResult?: string;
    goal?: string;
    updateTime?: string;
    userVO?: UserVO;
  };

  type deleteChartUsingDELETEParams = {
    /** chartId */
    chartId: string;
  };

  type deletePostUsingDELETEParams = {
    /** postId */
    postId: string;
  };

  type getChartByIdUsingGETParams = {
    /** chartId */
    chartId: string;
  };

  type getPostByIdUsingGETParams = {
    /** postId */
    postId: string;
  };

  type LoginVO = {
    token?: string;
    tokenExpiration?: number;
    userId?: string;
    userRole?: 'USER' | 'ADMIN' | 'BAN';
  };

  type MultiResultChartVO_ = {
    code?: string;
    data?: ChartVO[];
    message?: string;
    page?: number;
    size?: number;
    success?: boolean;
    total?: number;
  };

  type MultiResultPostVO_ = {
    code?: string;
    data?: PostVO[];
    message?: string;
    page?: number;
    size?: number;
    success?: boolean;
    total?: number;
  };

  type PageRequest = {
    currentPage?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
  };

  type PostCreateParam = {
    content?: string;
    tags?: string[];
    title?: string;
  };

  type PostQueryParam = {
    currentPage?: number;
    pageSize?: number;
    postId?: string;
    sortField?: string;
    sortOrder?: string;
    userId?: string;
  };

  type PostUpdateParam = {
    content?: string;
    postId?: string;
    tags?: string[];
    title?: string;
  };

  type PostVO = {
    content?: string;
    createTime?: string;
    favourNum?: number;
    postId?: number;
    tags?: string;
    thumbNum?: number;
    title?: string;
    updateTime?: string;
    userVO?: UserVO;
  };

  type ResultBoolean_ = {
    code?: string;
    data?: boolean;
    message?: string;
    success?: boolean;
  };

  type ResultChartVO_ = {
    code?: string;
    data?: ChartVO;
    message?: string;
    success?: boolean;
  };

  type ResultLoginVO_ = {
    code?: string;
    data?: LoginVO;
    message?: string;
    success?: boolean;
  };

  type ResultPostVO_ = {
    code?: string;
    data?: PostVO;
    message?: string;
    success?: boolean;
  };

  type ResultUserVO_ = {
    code?: string;
    data?: UserVO;
    message?: string;
    success?: boolean;
  };

  type UserLoginParam = {
    rememberMe?: boolean;
    userPassword?: string;
    username?: string;
  };

  type UserRegisterParam = {
    checkPassword?: string;
    email?: string;
    phone?: string;
    userPassword?: string;
    username?: string;
  };

  type UserVO = {
    createTime?: string;
    email?: string;
    phone?: string;
    userAvatar?: string;
    userId?: number;
    userProfile?: string;
    userRole?: 'USER' | 'ADMIN' | 'BAN';
    username?: string;
  };
}
