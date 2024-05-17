/*
    *document.querySelector*
querySelector ကိုသုံးပြီးကြိုက်တာကို select လုပ်လို့ရ။
class ကို select လုပ်ချင်ရင် ရှေ့မှာ . ခံ
id ကို select လုပ်ချင်ရင် ရှေ့မှာ # ခံ
တစ်ခြားကောင်တွေကို လည်း querySelector  သုံးပြီး select လုပ်လို့ရ။

** class တွေကို select လုပ်တဲ့ အခါ querySelector ကိုသုံးရင် ပထမဆုံးတွေ့တဲ့ကောင်ကို select လုပ်သွားမယ်။
   querySelectorAllကို သုံးရင် class တူတဲ့အကုန်လုံးကို  NodeList (array နဲ့တူတဲ့ကောင် array တော့မဟုတ်)
   ထဲမှာ ထည့်ပေးသွားမယ်။
   ယူသုံးတဲ့အခါ ကိုယ်သုံးချင်တဲ့ ကောင်ရဲ့ index ကိုထည့်ပေးရမယ်။

*/

const transformDivTag = document.querySelector(".transform");
const transformButtonTag = document.querySelector(".transformButton");


const addTheClassList = () => {
    if( transformDivTag.classList.contains("startTransform") ){
        transformDivTag.classList.remove("startTransform")
    }else{
        transformDivTag.classList.add("startTransform")
    }
}

transformButtonTag.addEventListener("click", addTheClassList);

