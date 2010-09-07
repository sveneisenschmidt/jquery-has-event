/**
 * jQuery.hasEvent - Check jQuery Elements fot attached events.
 * Copyright (c) 2010 Sven Eisenschmidt - sven.eisenschmidt(at)gmail(dot)com | http://unsicherheitsagent.de
 * Dual licensed under MIT and GPL.
 * Date: 9/7/2010
 * @author Sven Eisenschmidt
 * @version 1.4.2
 *
 * http://github.com/fate/jquery-has-event
 */
(function($) {
    $.fn.hasEvent = function(A, F, E) {
        var L = 0;
        var T = typeof A;
        var V = false;
        E = E ? E : this;
        A = (T == 'string') ? $.trim(A) : A;
        if(T == 'function') F = A, A = null;
        if(F == E) delete(F);
        var S = E.data('events');
        for (e in S) if (S.hasOwnProperty(e)) L++;
        if(L < 1) return V = false;
        if(A && !F) {
            return V = S.hasOwnProperty(A);
        } else
        if(A && S.hasOwnProperty(A) && F) {
            $.each(S[A], function(i, r) {
                if(V == false && r.handler == F) V = true;
            });
            return V;
        } else
        if(!A && F) {
            $.each(S, function(i, s) {
                if(V == false) {$.each(s, function(k, r) {
                    if(V == false && r.handler == F) V = true;
                });}
            });
        }
        return V;
    }
    $.extend($, {hasEvent: $.fn.hasEvent});
}) (jQuery);
