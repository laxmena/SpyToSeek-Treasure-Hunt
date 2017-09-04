
!function($,window,document,_undefined)
{XenForo.BRMIcontainer=function($container){this.__construct($container);};XenForo.BRMIcontainer.prototype={__construct:function($container)
{this.$container=$container;XenForo.ajax('index.php?brmi-mailchimp',{},$.context(this,'loadComplete'),{global:false});},loadComplete:function(ajaxData)
{var self=this;if(ajaxData.hideForm&&ajaxData.subscribe){this.$container.remove();return;}
if(ajaxData.templateHtml){$(ajaxData.templateHtml).xfInsert('appendTo',self.$container.find('.innerContent'));this.$container.show();}},};XenForo.register('.BRMIcontainer','XenForo.BRMIcontainer');}
(jQuery,this,document);