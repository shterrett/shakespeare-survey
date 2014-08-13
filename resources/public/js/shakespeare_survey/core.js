// Compiled by ClojureScript 0.0-2280
goog.provide('shakespeare_survey.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('reagent.core');
shakespeare_survey.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false], null));
shakespeare_survey.core.set_value_BANG_ = (function set_value_BANG_(id,value){cljs.core.swap_BANG_.call(null,shakespeare_survey.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false);
return cljs.core.swap_BANG_.call(null,shakespeare_survey.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),id], null),value);
});
shakespeare_survey.core.get_value = (function get_value(id){return cljs.core.get_in.call(null,cljs.core.deref.call(null,shakespeare_survey.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),id], null));
});
/**
* @param {...*} var_args
*/
shakespeare_survey.core.row = (function() { 
var row__delegate = function (label,body){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),body], null)], null);
};
var row = function (label,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return row__delegate.call(this,label,body);};
row.cljs$lang$maxFixedArity = 1;
row.cljs$lang$applyTo = (function (arglist__5201){
var label = cljs.core.first(arglist__5201);
var body = cljs.core.rest(arglist__5201);
return row__delegate(label,body);
});
row.cljs$core$IFn$_invoke$arity$variadic = row__delegate;
return row;
})()
;
shakespeare_survey.core.text_input = (function text_input(id,label){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shakespeare_survey.core.row,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"value","value",305978217),shakespeare_survey.core.get_value.call(null,id),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__5202_SHARP_){return shakespeare_survey.core.set_value_BANG_.call(null,id,p1__5202_SHARP_.target.value);
})], null)], null)], null);
});
shakespeare_survey.core.list_item = (function list_item(id,k,v,states){var handle_click_BANG_ = (function handle_click_BANG_(){cljs.core.swap_BANG_.call(null,cljs.core.get.call(null,states,k),cljs.core.not);
return shakespeare_survey.core.set_value_BANG_.call(null,id,cljs.core.keys.call(null,cljs.core.filter.call(null,(function (p__5217){var vec__5218 = p__5217;var _ = cljs.core.nth.call(null,vec__5218,(0),null);var v__$1 = cljs.core.nth.call(null,vec__5218,(1),null);return cljs.core.deref.call(null,v__$1);
}),states)));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),("list-group-item"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref.call(null,cljs.core.get.call(null,states,k)))?" active":null))),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handle_click_BANG_], null),v], null);
});
/**
* @param {...*} var_args
*/
shakespeare_survey.core.selection_list = (function() { 
var selection_list__delegate = function (id,label,items){var states = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__5229){var vec__5230 = p__5229;var k = cljs.core.nth.call(null,vec__5230,(0),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reagent.core.atom.call(null,false)], null);
}),items));return ((function (states){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shakespeare_survey.core.row,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512),(function (){var iter__4269__auto__ = ((function (states){
return (function iter__5231(s__5232){return (new cljs.core.LazySeq(null,((function (states){
return (function (){var s__5232__$1 = s__5232;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5232__$1);if(temp__4126__auto__)
{var s__5232__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5232__$2))
{var c__4267__auto__ = cljs.core.chunk_first.call(null,s__5232__$2);var size__4268__auto__ = cljs.core.count.call(null,c__4267__auto__);var b__5234 = cljs.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__5233 = (0);while(true){
if((i__5233 < size__4268__auto__))
{var vec__5237 = cljs.core._nth.call(null,c__4267__auto__,i__5233);var k = cljs.core.nth.call(null,vec__5237,(0),null);var v = cljs.core.nth.call(null,vec__5237,(1),null);cljs.core.chunk_append.call(null,b__5234,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [shakespeare_survey.core.list_item,id,k,v,states], null));
{
var G__5239 = (i__5233 + (1));
i__5233 = G__5239;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5234),iter__5231.call(null,cljs.core.chunk_rest.call(null,s__5232__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5234),null);
}
} else
{var vec__5238 = cljs.core.first.call(null,s__5232__$2);var k = cljs.core.nth.call(null,vec__5238,(0),null);var v = cljs.core.nth.call(null,vec__5238,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [shakespeare_survey.core.list_item,id,k,v,states], null),iter__5231.call(null,cljs.core.rest.call(null,s__5232__$2)));
}
} else
{return null;
}
break;
}
});})(states))
,null,null));
});})(states))
;return iter__4269__auto__.call(null,items);
})()], null)], null);
});
;})(states))
};
var selection_list = function (id,label,var_args){
var items = null;if (arguments.length > 2) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return selection_list__delegate.call(this,id,label,items);};
selection_list.cljs$lang$maxFixedArity = 2;
selection_list.cljs$lang$applyTo = (function (arglist__5240){
var id = cljs.core.first(arglist__5240);
arglist__5240 = cljs.core.next(arglist__5240);
var label = cljs.core.first(arglist__5240);
var items = cljs.core.rest(arglist__5240);
return selection_list__delegate(id,label,items);
});
selection_list.cljs$core$IFn$_invoke$arity$variadic = selection_list__delegate;
return selection_list;
})()
;
shakespeare_survey.core.save_doc = (function save_doc(){return ajax.core.POST.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(context)+"/save"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,shakespeare_survey.core.state)),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (_){return cljs.core.swap_BANG_.call(null,shakespeare_survey.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),true);
})], null));
});
shakespeare_survey.core.home = (function home(){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Reagent Form"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shakespeare_survey.core.text_input,new cljs.core.Keyword(null,"first-name","first-name",-1559982131),"First name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shakespeare_survey.core.text_input,new cljs.core.Keyword(null,"last-name","last-name",-1695738974),"Last name"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [shakespeare_survey.core.selection_list,new cljs.core.Keyword(null,"favorite-drinks","favorite-drinks",-1752184854),"Favorite drinks",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coffee","coffee",23772871),"Coffee"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beer","beer",1742036006),"Beer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"crab-juice","crab-juice",-1168836952),"Crab juice"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"saved?","saved?",-2027163192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,shakespeare_survey.core.state)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Saved"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),shakespeare_survey.core.save_doc], null),"Submit"], null))], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shakespeare_survey.core.home], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map