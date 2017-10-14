var HealthRisks = document.getElementById('HealthRisk');
var main = document.getElementById('main');


HealthRisks.addEventListener('click', function(e)
{
    e.preventDefault(); // don't navigate to <a> tag href
    if (e.target.tagName === 'A') 
    {
        switch(e.target.textContent)
        {
            case "Accidents (Unintentional Injuries)":
            main.textContent ="Prevention 1"; 
            break;
            case "Alzheimer's Disease":
            main.textContent ="Prevention 2"; 
            break;
            case "Anemias":
            main.textContent ="Prevention 3"; 
            break;
            case "Aortic Aneurysm and Dissection":
            main.textContent ="Prevention 4"; 
            break;
        }
    }
});