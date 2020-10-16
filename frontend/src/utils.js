export const getCurrencySymbol=countryCode=>{
   const currencies={
       us:'$',
       au:'$',
       ca:'$',

   };
   return currencies[countryCode];
};

export const exportFormData=form=>Array
         .from(form.elements)
         .reduce((acc,{id,value})=>({
             ...acc,[id]:value
         }),{})