# jQuery.hasEvent

## Usage

    jQuery(Element).hasEvent(eventType, [eventHandler])
    jQuery(Element).hasEvent(eventHandler)

    jQuery.hasEvent(eventType, Element)
    jQuery.hasEvent(eventType, eventHandler, Element)


## Examples

        var $el = jQuery('<div />);

        // Event setup with two closurs and two lambda functions
        var fnClick = function() {
            console.log('closure click!');
        }

        var fnMouseover = function() {
            console.log('closure mousemove!');
        }

        $el.bind({
            'click': fnClick,
            'mouseover': fnMouseover
        });

        $el.bind({
            'click': function() {
                console.log('lambda click!');
            },
            'dblclick': function() {
                console.log('lambda double click!');
            }
        });


        // check for the attached events

        jQuery.hasEvent('click', fnClick, $el);

        // OR

        $el.hasEvent('click');                  // true
        $el.hasEvent('dblclick');               // true
        $el.hasEvent('mouseover');              // true
        $el.hasEvent('trippleclick');           // false

        $el.hasEvent('click', fnClick);         // true
        $el.hasEvent('click', function() {});   // false

        $el.hasEvent('mouseover', fnMouseover); // true

        $el.hasEvent(fnClick);                  // true
        $el.hasEvent(fnMouseover);              // true