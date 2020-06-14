using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.ActivityTable
{
    public class Create
    {
        public class Command : IRequest
        { //methana create ne karanne get karanawanam thama <activity> e type data ganna hinda. 
            public Guid Id { get; set; }
            public string Title { get; set; }
            public string Description { get; set; }
            public string Category { get; set; }
            public DateTime Date { get; set; }
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
                var activity=new Activity{
                    Id=request.Id,
                    Title=request.Title,
                    Description=request.Description,
                    Category=request.Category,
                    Date=request.Date,
                    City=request.City,
                    Venue=request.Venue
                };

                _dataContex.ActivityTbl.Add(activity);
                var success=await _dataContex.SaveChangesAsync() >0;
                //methanadi karanne success eka bool ekak karana eka.mokada savechangesAsync dunnahama wenne int agaya 1 wena eka. 
                // success naththam 0 hambenne.eka hinda use karanne 

                if (success)
                {
                    return Unit.Value;
                }
                throw new Exception ("problem saving changes");


            }
        }
    }
}