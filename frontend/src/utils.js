export const getCurrencySymbol=countryCode=>{
   const currencies={
       us:'$',
       au:'$',
       ca:'$',

   };
   return currencies[countryCode];
};