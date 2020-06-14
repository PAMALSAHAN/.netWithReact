using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.ActivityTable
{
    public class Delete
    {
    
                public class Command : IRequest
                { 
                    public Guid Id { get; set; }
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
                        //id ekata adila activity eka ganna
                        var activity= await _dataContex.ActivityTbl.FindAsync(request.Id);
                        if(activity==null){
                            throw new Exception("could not find");
                        }

                        _dataContex.Remove(activity);

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