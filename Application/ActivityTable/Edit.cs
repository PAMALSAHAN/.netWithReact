using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.ActivityTable
{    public class Edit
    {

                public class Command : IRequest
                { 
                    public Guid Id { get; set; }
                    public string Title { get; set; }
                    public string Description { get; set; }
                    public string Category { get; set; }
                    public DateTime ? Date  { get; set; }
                    public string City { get; set; }
                    public string Venue { get; set; }
                }
        
                public class Handler : IRequestHandler<Command>
                {
                    private readonly DataContex _dataContex;
                    public Handler(DataContex dataContex)
                    {
                        _dataContex = dataContex;
        
                    }
                    public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
                    {

                        var activity = await  _dataContex.ActivityTbl.FindAsync(request.Id);
                        //methanadi await kiyana eka use karana eka aniwaryen wadagath.mokada database ekata connect wena hinda. 
                        if (activity == null)
                            throw new Exception("could't find");

                        activity.Title=request.Title ?? activity.Title;
                        activity.Description=request.Description ?? activity.Description;
                        activity.Category=request.Category ?? activity.Category;
                        activity.Date=request.Date ?? activity.Date;
                        //methanadi date ekata error ekak enawa null wenna baha kiyala 
                        //eka hinda date eka laga ? ekak dannna.
                        activity.City=request.City ?? activity.City;
                        activity.Venue=request.Venue ?? activity.Venue;



                        var success=await _dataContex.SaveChangesAsync() >0;
                    
                        if (success)
                        {
                            return Unit.Value;
                        }
                        throw new Exception ("problem saving changes");
        
        
                    }
                }
    }
}