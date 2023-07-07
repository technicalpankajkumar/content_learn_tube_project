****** IMPORTANT GUIDE OF FORM UTITLITY ********

# !Most Important props
-----------------------
control  => This props are define which component are you used like 
            input,button,checkbox,file,radio,select,textarea and add on...

# Small example used our predefine form_utility component.
----------------------------------------------------------
code => 
import Field  from  './file_path'

<Field 
    control="input" || control="button" || control="radio" || many more...
    type="text" 
    label="First Name"  || not complesory
    name="fname" 
    outerClass={{background:"green",margin:"2px"}}
    more...
/>

# Input Component Important props
---------------------------------
{control="input", name,label,type,outerClass,...rest}

name  => this will be the name of input field and id of input field.
label => this props not compulsory. but you can show lable before input field. 
         so you can pass this props. lable of field name.
type  => This props accept type of input field like text,number,date,date-time or
         many more...
outerClass => pass outerClass props to add css in parent node of input field to 
              add like margin, padding or more...
other props (...rest) => you can pass another props to the input field like placeholder,
                className, min, max , pattern or many more.. 

# Button Component Important props
-----------------------------------
{ control="button",type,lable,...rest}

type => this attribute accept three value like this  submit | button | reset
lable => this is name of button.
other props  => pass another props like className, id many more in button tag.

# Select Componenet Important props
-----------------------------------

{ control="select" options, onChange, outerClass, name,label,...rest }

options  => 