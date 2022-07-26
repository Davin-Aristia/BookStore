const multer=require('multer');

const storage=multer.diskStorage({
    destination: function(res,file,cb){
        cb(null,'public/uploads/');
    },
    filename: function(req,file,cb){
        // cb(null,new Date().toISOString()+ '-' + file.originalname);
        cb(null,file.originalname);
        console.log(new Date().toISOString())
    },
});

const fileFilter=(req,file,cb)=>{
    if(file.mimetype ==='image/jpeg' || file.mimetype ==='image/png'){
        cb(null,true);
    }else{
        //reject file
        cb(
            {
                message: 'Unsupported file format',
            },
            false
        );
    }
};

const uploadMiddleware = multer({
    storage: storage,
    limits:{
        fileSize: 3000000,
    },
    fileFilter: fileFilter,
});

module.exports=uploadMiddleware;