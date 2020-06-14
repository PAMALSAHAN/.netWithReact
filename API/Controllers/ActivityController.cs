using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.ActivityTable;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivityController : ControllerBase
    {
        private readonly IMediator _mediator;
        public ActivityController(IMediator mediator)
        {
            _mediator = mediator;

        }


        //Get all activity
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> ListFromController(){
            
            return await _mediator.Send(new List.Query());
        }

        //Get one activity
        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetOneActivityController(Guid id){
            
            return await _mediator.Send(new Details.Query{Id=id});
        }

        //post ekak dana eka
        [HttpPost]
        public async Task<ActionResult<Unit>> PostActivityController([FromBody]Create.Command command){
                //methana frombody danna onema naha mokada apiController eka tina hinda. use karath awlak naha. 
                return await _mediator.Send(command);
        }

        //update single activity
        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> UpdateActivityController(Guid id, [FromBody]Edit.Command command){
                command.Id=id;
                return await _mediator.Send(command);
        }

        //delete an activity
        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> DeleteActivityController(Guid id){
            // id eka pass karanna one athulata.
            return await _mediator.Send(new Delete.Command{Id=id});
        }

    }

    
}